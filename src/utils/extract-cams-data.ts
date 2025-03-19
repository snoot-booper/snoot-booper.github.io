type Cam = {
    naam: string;
    mediaid: string;
    order: number;
    url: string;
    file: string;
    id: number;
    tooninvogelgids: number;
    vogel: number;
    actief: number;
}

export function extractCamsData(html: string): Cam[] | null {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const camsData = doc.getElementById('vue')?.getAttribute('data-cams');



    if (camsData) {
        const json = JSON.parse(camsData || '{}');
        return json;
    }
    return null;
}
