const ball = document.getElementById('ball');
const lane = document.querySelector('.lane');

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
    requestAnimationFrame(updateBallPosition);
};

const startBowling = () => {
    ballVelocity.y = -5;
};

lane.addEventListener('click', startBowling);
updateBallPosition();
