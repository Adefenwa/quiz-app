// FOR REUSED IMPORTANT FUNCTIONS
export const getJSON = async function(url) {
    try {
        const res = await fetch(url)
        const data = await res.json();

        if (!res.ok) throw new Error(`API NOT FOUND`)
       return data;
    } catch (err) {
        throw err
    }
}

