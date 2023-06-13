export default function Registration() {
  return (
    <div className="container">
      <div className="form-container">
        <input className="names" type="text" placeholder="First Names" />
        <input className="names" type="text" placeholder="Surname" />
        <br />
        <input className="" type="email" placeholder="Email address" />
        <br />
        <input className="" type="password" placeholder="Password" />
        <button>Create account</button>
      </div>
    </div>
  );
}
