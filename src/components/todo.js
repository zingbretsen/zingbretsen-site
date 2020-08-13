import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

const Todo = ({children, id, title, description}) => {
        return (
            <div className="todo" id={id}>
                <h4>{title}</h4>
                <p>{description}</p>
                {children}
            </div>
        );
}

export default Todo
