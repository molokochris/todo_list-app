import { useState } from "react";

export function Login(setIsVal) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        flexDirection: "column",
      }}
    >
      <input
        placeholder="email"
        style={{ padding: "6px 10px", marginBottom: "10px" }}
      />
      <input
        placeholder="password"
        style={{ padding: "6px 10px", marginBottom: "10px" }}
      />
      <span
        style={{ color: "tomato", fontSize: "12px", marginBottom: "10px" }}
        onClick={() => setIsVal(true)}
      >
        Register instead?
      </span>
      <button>login</button>
    </div>
  );
}
export function Register() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItem: "center" }}
    >
      <input placeholder="email" />
      <input placeholder="password" />
      <button>register</button>
    </div>
  );
}
