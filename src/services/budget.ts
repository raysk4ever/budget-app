export async function fetchCommon({ type = '' }) {
    return await (await fetch(`/api/common?type=${type}`)).json()
}

export async function saveCommon(payload = {}) {
    return await (await fetch('/api/common', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }))
}