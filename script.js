const ball = document.getElementById('ball');
const lane = document.querySelector('.lane');
const pins = document.querySelectorAll('.pin');

let ballPosition = { x: lane.clientWidth / 2 - 15, y: lane.clientHeight - 80 };
let ballVelocity = { x: 0, y: 0 };

const updateBallPosition = () => {
    ballPosition.x += ballVelocity.x;
    ballPosition.y += ballVelocity.y;

    if (ballPosition.y <= 50) {
        ballVelocity.y = 0;
        ballVelocity.x = 0;
    }

    ball.style.left = `${ballPosition.x}px`;
    ball.style.top = `${ballPosition.y}px`;

    checkCollision();
    requestAnimationFrame(updateBallPosition);
};

const startBowling = () => {
    ballVelocity.y = -5;
};

const checkCollision = () => {
    pins.forEach(pin => {
        const pinRect = pin.getBoundingClientRect();
        const ballRect = ball.getBoundingClientRect();

        if (
            ballRect.x < pinRect.x + pinRect.width &&
            ballRect.x + ballRect.width > pinRect.x &&
            ballRect.y < pinRect.y + pinRect.height &&
            ballRect.y + ballRect.height > pinRect.y
        ) {
            pin.style.backgroundColor = 'grey'; // Indicate collision
        }
    });
};

lane.addEventListener('click', startBowling);
updateBallPosition();
