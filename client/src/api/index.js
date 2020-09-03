export default {
  async addUser(newUser) {
    try {
      const res = await fetch("http://localhost:5000/users/add", {
        method: "POST",
        headers: {
          // Must specify that we are sending JSON! 🙄
          "Content-Type": "application/json",
        },
        // Turn 'newTravel' JS Object into actual JSON
        body: JSON.stringify(newUser),
      });

      if (res.status > 400 && res.status < 500) {
        throw `Bad route to server! 😞 ${res.status} ${res.body}`;
      } else if (!res.ok) {
        throw `Unable to write data to server! ${res.status}`;
      }
      return await res.json();
    } catch (e) {
      throw new Error(e);
    }
  },
  async loginUser(newUser) {
    try {
      const res = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          // Must specify that we are sending JSON! 🙄
          "Content-Type": "application/json",
        },
        // Turn 'newTravel' JS Object into actual JSON
        body: JSON.stringify(newUser),
      });

      if (res.status > 400 && res.status < 500) {
        throw `Bad route to server! 😞 ${res.status} ${res.body}`;
      } else if (!res.ok) {
        throw `Unable to write data to server! ${res.status}`;
      }
      return await res.json();
    } catch (e) {
      throw new Error(e);
    }
  },
};
