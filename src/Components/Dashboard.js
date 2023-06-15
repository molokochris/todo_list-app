export default function Dashboard() {
  return (
    <div
      className="dashboard-container"
      style={{ backgroundColor: "rgb(245,245,245)" }}
    >
      <div className="search-container">
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <div className="input-group">
              <input
                className="form-control border-success"
                type="search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  style={{ borderRadius: "0 0.25rem 0.25rem 0" }}
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </nav>
      </div>

      <div
        className="dashboard card text-center"
        style={{ height: "90%", overflowY: "auto", overflowX: "hidden" }}
      >
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                To-do
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Done
              </a>
            </li>
          </ul>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card text-bg-primary card-min">
              <div className="card-body">
                <h6 className="card-title">title</h6>
                body
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-success card-min">
              <div className="card-body">
                <h6 className="card-title">title</h6>
                body
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-danger card-min">
              <div className="card-body">
                <h6 className="card-title">title</h6>
                body
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="add">
        <a href="#" className="add-link">
          <span className="add-icon">+</span>
        </a>
      </div>
    </div>
  );
}
