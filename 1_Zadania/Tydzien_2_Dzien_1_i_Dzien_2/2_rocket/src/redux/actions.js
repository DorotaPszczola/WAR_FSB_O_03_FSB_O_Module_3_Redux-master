// Tutaj zaimplementuj akcje

// isLaunched
// { launched: false, counter: 5 }
const ROCKET_LAUNCH = "[ROCKET] launching the rocket";
const COUNTDOWN = "[ROCKET] counting down"

const launch = (payload) => ({
    type: ROCKET_LAUNCH,
    payload
});

const countdown = () => ({
    type: COUNTDOWN
})

const countAndLaunch = () => (dispatch, )

export { ROCKET_LAUNCH, COUNTDOWN ,countdown, launch}