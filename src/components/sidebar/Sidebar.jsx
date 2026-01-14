// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./sidebar.css";

// const Sidebar = ({ menuItems }) => {
//   const location = useLocation();

//   return (
//     <div className="sidebar">
//       <ul>
//         {menuItems.map((item) => {
//           const isActive = location.pathname.includes(item.path);
//           return (
//             <li key={item.path} className={isActive ? "active" : ""}>
//               <Link to={item.path}>{item.name}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ menuItems, onItemClick }) => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item, index) => {
          const isActive =
            item.path && location.pathname.includes(item.path);

          return (
            <li
             key={item.path || item.name}
              className={isActive ? "active" : ""}
              onClick={
                item.ref && onItemClick
                  ? () => onItemClick(item.ref)
                  : undefined
              }
            >
              {item.path ? (
                <Link to={item.path}>{item.name}</Link>
              ) : (
                <span className="sidebar-link">{item.name}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
