const commentBox = document.getElementById('comment')

const randomBtn = document.getElementById('random-notification')
const commentBtn = document.getElementById('comment-notification')

async function main() {
    const permission = await Notification.requestPermission();

    if (permission == 'granted') {
        sendNotification()

        commentBtn.addEventListener('click', sendCommentNotification)
    }
}

function sendNotification() {
    const notification = new Notification('This is a test notification.')
}

function sendCommentNotification() {
    const comment = commentBox.value

    const notification = new Notification('Comment', {body: comment})
}

main()