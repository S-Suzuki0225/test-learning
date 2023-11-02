export const Navbar = (props: {
  onClickHamburger: () => void;
  onClickTitle: () => void;
  onClickMeatball: () => void;
  meatballItems: { item: string; onClick: () => void }[];
}) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button
          title="hamburger"
          className="btn btn-square btn-ghost"
          type="button"
          onClick={props.onClickHamburger}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={props.onClickTitle}
        >
          TodoList
        </a>
      </div>
      <div className="flex-none">
        <details className="dropdown dropdown-end">
          <summary
            className="btn btn-square btn-ghost "
            onClick={props.onClickMeatball}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            {props.meatballItems.map((i) => {
              return (
                <li onClick={i.onClick}>
                  <a>{i.item}</a>
                </li>
              );
            })}
          </ul>
        </details>
      </div>
    </div>
  );
};
