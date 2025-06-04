import http from "../connection/http";

//Endpoint To Bring all Data
export async function getImages(URL, setCategory) {
  await http.client
    .get(URL)
    .then((res) => setCategory(res.data.data))
    .catch((e) => console.log(e.message));
}
//Endpoint For New User
export async function userRegistration(URL, form, navigate) {
  await http.client
    .post(URL, form)
    .then(() => navigate("/login"))
    .catch((e) => console.log(e.message));
}
//Endpoint For User Login
export async function userLogin(
  URL,
  clientData,
  setUser,
  setIsLoading,
  navigate,
  setLogin
) {
  await http.client
    .post(URL, clientData)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      setUser(res.data.data);
      setLogin(true);
      navigate("/");
    })
    .catch(() => {
      setIsLoading(false);
    });
}
//Endpoint For User Logout
export async function logout(URL, setLogin, navigate) {
  await http.client
    .post(URL, "", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then(() => {
      localStorage.clear();
      navigate("/login");
      setLogin(false);
    })
    .catch((e) => console.log(e));
}
//Endpoint For Add Item To The User Wishlist
export async function addToWishList(URL, setUser, setLoading, setAnimate) {
  await http.client
    .post(URL, "", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      setUser(res.data.data);
      setLoading(false);
      setAnimate(false);
    });
}
//Endpoint For Remove Item To The User Wishlist
export async function removeItemFromWishlist(
  URL,
  setUser,
  setLoading,
  setAnimate
) {
  await http.client
    .post(URL, "", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      setUser(res.data.data);
      setLoading(false);
      setAnimate(false);
    });
}
//Endpoint For Add Item To The User Cart
export async function booking(URL, data, setUser, setLoading, setAnimate) {
  await http.client
    .post(URL, data, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      setUser(res.data.data);
      setLoading(false);
      setAnimate(false);
    });
}
//Endpoint For Remove Item From The User Cart
export async function removeItemFromCart(URL, setUser, setLoading, setAnimate) {
  await http.client
    .post(URL, "", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      setUser(res.data.data);
      setLoading(false);
      setAnimate(false);
    });
}
