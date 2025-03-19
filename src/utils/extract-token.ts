export function extractToken(html: string): string | null {
    const pattern = /token=([^"]+)/;
    const match = html.match(pattern);

    if (match && match[1]) {
        return match[1];
    }

    return null;
}
