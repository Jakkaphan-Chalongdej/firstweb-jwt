import { useState } from "react";
import Router from "next/router";
export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submitHandler(e) {
    setSubmitting(true);
    e.preventDefault();
    try {
      const res = await fetch("/api/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          age,
        }),
      });
      setSubmitting(false);
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      Router.push("/");
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="my-4">
        <label htmlFor="firstname">
          <h3 className="font-bold">Firstname</h3>
        </label>
        <input
          id="firstname"
          className="shadow border rounded w-full"
          type="text"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="lastname">
          <h3 className="font-bold">Lastname</h3>
        </label>
        <input
          className="shadow border rounded w-full"
          id="lastname"
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="age">
          <h3 className="font-bold">Age</h3>
        </label>
        <input
          className="shadow border rounded w-full"
          id="age"
          type="int"
          name="age"
          maxLength="2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button disabled={submitting} type="submit">
        {submitting ? "Creating ..." : "Create"}
      </button>
    </form>
  );
}
