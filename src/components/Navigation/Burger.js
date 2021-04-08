import React, { useState } from "react";
import styled from "styled-components";
import MenuList from "./MenuList";
const Burger = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>
            <MenuList open={open} />
        </>
    )
}

export default Burger;