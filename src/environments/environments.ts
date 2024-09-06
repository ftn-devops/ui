declare const window: any;
console.log("here");
console.log(window.env);

export const environments={
    user_service_url : window.env ? window.env.USER_SERVICE_URL : "http://localhost:8080/user",
    accommondation_service_url: window.env ? window.env.ACCOMMODATION_SERVICE_URL : "http://localhost:8080/accommodation/",
    reservation_service_url: window.env ? window.env.RESERVATION_SERVICE_URL : "http://localhost:8080/accommodatino/reservations/"
}