document.getElementById('quiz-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        if (data[key]) {
            if (!Array.isArray(data[key])) {
                data[key] = [data[key]];
            }
            data[key].push(value);
        } else {
            data[key] = value;
        }
    });

    const response = await fetch('https://dc700d47-198c-4c75-aabd-7f487852ad5b-00-2hqe7nuysctza.janeway.replit.dev/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    const recommendationDiv = document.getElementById('recommendation');
    const videoLink = document.getElementById('video-link');
    
    videoLink.href = result.video_url;
    videoLink.textContent = result.video_title;
    recommendationDiv.classList.remove('hidden');
});
