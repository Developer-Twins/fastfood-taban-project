import router from "../../../router.js";
export default {
  signUp(context, payload) {
    context.state.signUpError = false;
    context.state.signUpErrorInternet = false;
    context.commit("changeLoadigOfSignup", true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKlV5VYfHwTd3ZGELog-Ctq6SV_JlVWtU ",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          context.state.signUpError = true;
          throw new Error("authIsfalse");
        }
      })
      .then((responseData) => {
        context.commit("setUser", {
          token: responseData.idToken,
          userId: responseData.localId,
          tokenExpiration: responseData.expiresIn,
        });

        (context.rootState.formType = "log-in"),
          (context.rootState.formTitle = "ورود"),
          context.commit("changeLoadigOfSignup", false);
        let id = String(Date.now()).substring(8);
        fetch(
          `https://restaurant-project-7b45f-default-rtdb.firebaseio.com/form/${id}.json`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload.userInfo),
          }
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((formData) => {
            localStorage.setItem(
              "userInfo",
              JSON.stringify([
                formData.userName,
                formData.userNumber,
                formData.userGender,
                formData.userAddress,
              ])
            );
            context.commit("setUserInfo");
          })

          .catch(() => {
            context.state.signUpErrorInternet = true;
            context.commit("changeLoadigOfSignup", false);
          });
        router.push("/home");
      })
      .catch((error) => {
        if (error.message !== "authIsfalse") {
          context.state.signUpErrorInternet = true;
        }
        context.commit("changeLoadigOfSignup", false);
      });
  },

  logIn(context, payload) {
    context.state.isErrorLogin = false;
    context.state.signUpErrorInternet = false;
    context.commit("changeLoadigOfLogIn", true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKlV5VYfHwTd3ZGELog-Ctq6SV_JlVWtU",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          context.state.isErrorLogin = true;
          throw new Error("authIsfalse");
        }
      })
      .then((responseData) => {
        context.commit("setUser", {
          token: responseData.idToken,
          userId: responseData.localId,
          tokenExpiration: responseData.expiresIn,
        });

        fetch(
          "https://restaurant-project-7b45f-default-rtdb.firebaseio.com/form.json"
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((formData) => {
            console.log(formData);
            for (let item in formData) {
              if (formData[item].userEmail === payload.email) {
                console.log(formData[item]);

                localStorage.setItem(
                  "userInfo",
                  JSON.stringify([
                    formData[item].userName,
                    formData[item].userNumber,
                    formData[item].userGender,
                    formData[item].userAddress,
                  ])
                );
                context.commit("setUserInfo");
              }
            }
            context.commit("changeLoadigOfLogIn", false);
          })
          .catch(() => {
            context.state.signUpErrorInternet = true;
            context.commit("changeLoadigOfLogIn", false);
            console.log("کچ درونی", "login");
          });
        router.push("/home");
      })
      .catch((error) => {
        if (error.message !== "authIsfalse") {
          context.state.signUpErrorInternet = true;
        }
        console.log("بیرونی ترین کچ", "login");
        context.commit("changeLoadigOfLogIn", false);
      });
  },
};
