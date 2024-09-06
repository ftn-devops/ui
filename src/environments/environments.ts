declare const window: any;
console.log("here");
console.log(window.env);

export const environments={
    user_service_url : window.env.USER_SERVICE_URL,
    accommondation_service_url: window.env.ACCOMMODATION_SERVICE_URL,
    reservation_service_url: window.env.RESERVATION_SERVICE_URL
}