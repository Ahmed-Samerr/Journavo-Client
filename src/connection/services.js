import http from "../connection/http";

export async function getImages(URL, setCategory) {
  await http.client
    .get(URL)
    .then((res) => setCategory(res.data.data))
    .catch((e) => console.log(e.message));
}

export async function userRegistration(URL, form, navigate) {
  await http.client
    .post(URL, form)
    .then(() => navigate("/login"))
    .catch((e) => console.log(e.message));
}

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

export async function logout(URL, setLogin, navigate) {
  await http.client
    .post(URL, "", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then(() => {
      localStorage.removeItem("token");
      navigate("/login");
      setLogin(false);
    })
    .catch((e) => console.log(e));
}
