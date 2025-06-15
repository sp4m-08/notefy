import React from "react";
import { Link, useNavigate } from "react-router";
import { PlusIcon } from "lucide-react";
import Logo from "../assets/post-it.png";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-base-300 border-b border-basic-content">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex justify-between item-center">
          <h1
            className="text-3xl font-bold text-primary font-mono tracking-tight"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={Logo} alt="logo" className="size-12" />
          </h1>

          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
