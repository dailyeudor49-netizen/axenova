import { NextRequest, NextResponse } from 'next/server';

const NETWORK_API_URL = 'https://offers.supertrendaffiliateprogram.com/forms/api/';
const NETWORK_API_SUBMIT_URL = 'https://offers.supertrendaffiliateprogram.com/forms/api/submit/';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let params: URLSearchParams;

    // Handle both JSON and form-urlencoded requests
    if (contentType.includes('application/json')) {
      const jsonBody = await request.json();
      params = new URLSearchParams();
      for (const [key, value] of Object.entries(jsonBody)) {
        if (value !== null && value !== undefined) {
          params.append(key, String(value));
        }
      }
    } else {
      const body = await request.text();
      params = new URLSearchParams(body);
    }

    // Determine which endpoint to use based on offer type
    // Some offers use /forms/api/, others use /forms/api/submit/
    const useSubmitEndpoint = params.get('useSubmitEndpoint') === 'true';
    params.delete('useSubmitEndpoint'); // Remove this param before forwarding

    const targetUrl = useSubmitEndpoint ? NETWORK_API_SUBMIT_URL : NETWORK_API_URL;

    console.log('Proxy request to:', targetUrl);
    console.log('Params:', params.toString());

    // Forward the request to the network
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
      },
      body: params.toString(),
    });

    const responseText = await response.text();
    console.log('Network response status:', response.status);
    console.log('Network response:', responseText);

    // The network may return 200 even on success, or different status codes
    // Consider any 2xx response as success
    if (response.status >= 200 && response.status < 300) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, networkStatus: response.status }, { status: 200 });
    }
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json({ success: false, error: 'Proxy error' }, { status: 500 });
  }
}
