import { motion } from "motion/react";

import nothing_img from "../../../assets/img/nothing_img.jpg";
import EditIcon from "../../../assets/icons/edit";
import { useEffect, useState } from "react";

import AgeIcon from "../../../assets/icons/age";
import EyeIcon from "../../../assets/icons/eye";
import AddressIcon from "../../../assets/icons/address";
import CompanyIcon from "../../../assets/icons/company";
import PhoneIcon from "../../../assets/icons/phone";
import { getUser, putUser } from "../../../services/api.service";

function Profile() {
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState({
    isActive: true,
    balance: "",
    picture: "",
    age: 0,
    eyeColor: "",
    name: {
      first: "",
      last: "",
    },
    company: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const getUserInfo = async () => {
      const result = await getUser();
      console.log(result);
      setProfile(result);
    };

    getUserInfo();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleNameChange = (e) => {
    const fullName = e.target.value.split(" ");
    setProfile((prevProfile) => ({
      ...prevProfile, // Preserve the previous state
      name: {
        first: fullName[0],
        last: fullName[1] || "", // Handle case where the user only enters a first name
      },
    })); // Handle case where the user only enters a first name
  };

  const handleSaveData = async () => {
    const result = await putUser(profile);
    setProfile(result);
    setEdit((prev) => !prev);
  };

  return (
    <div className="bg-slate-100 w-full h-full p-4 overflow-y-auto">
      <div className="flex flex-col bg-white h-full rounded-lg">
        <div className="grid grid-cols-4 md:grid-cols-6 border-b border-slate-300 p-2 md:p-4 items-center ">
          <img
            src={nothing_img}
            alt="profile pic"
            className="w-20 h-20 md:w-36 md:h-36 border-2 border-slate-400 rounded-lg shadow-lg"
          />
          <div className="col-span-3 md:col-span-5 h-full flex flex-col justify-between relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              disabled={!edit}
              value={`${profile.name.first} ${profile.name.last}`}
              onChange={handleNameChange}
              className={`text-xl font-bold text-text-black  px-2 ${
                edit && "border-b-2 border-green-primary"
              }`}
            />
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex items-center gap-1">
                <PhoneIcon style={"grid size-5"} />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  disabled={!edit}
                  value={profile.phone}
                  onChange={handleChange}
                  className={`text-md font-bold text-text-black w-44 px-2 ${
                    edit && "border-b-2 border-green-primary"
                  }`}
                />
              </div>
              <div className="flex items-center gap-1">
                <AddressIcon style={"grid size-5"} />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  disabled={!edit}
                  value={profile.address}
                  onChange={handleChange}
                  className={`text-md font-bold text-text-black w-56 md:w-96 px-2 ${
                    edit && "border-b-2 border-green-primary"
                  }`}
                />
              </div>
              <div className="flex items-center gap-1">
                <CompanyIcon style={"grid size-5"} />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  disabled={!edit}
                  value={profile.company}
                  onChange={handleChange}
                  className={`text-md font-bold text-text-black w-32 px-2 ${
                    edit && "border-b-2 border-green-primary"
                  }`}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                <AgeIcon style={"grid size-5"} />
                <input
                  type="number"
                  name="age"
                  placeholder="age"
                  disabled={!edit}
                  value={profile.age}
                  onChange={handleChange}
                  className={`text-md font-bold text-text-black w-10 px-2 ${
                    edit && "border-b-2 border-green-primary"
                  }`}
                />
              </div>
              <div className="flex items-center gap-1">
                <EyeIcon style={"grid size-5"} />
                <input
                  type="text"
                  name="eyeColor"
                  placeholder="Eye color"
                  disabled={!edit}
                  value={profile.eyeColor}
                  onChange={handleChange}
                  className={`text-md font-bold text-text-black w-14 px-2 ${
                    edit && "border-b-2 border-green-primary"
                  }`}
                />
              </div>
            </div>
            {!edit ? (
              <button
                onClick={() => setEdit((set) => !set)}
                className="absolute top-0 right-0 border-2 border-slate-500 text-slate-500 flex p-1 rounded-lg gap-2 md:px-3 font-bold text-sm hover:bg-green-50 hover:text-green-primary hover:border-green-primary"
              >
                <div className="grid size-5 font-bold">
                  <EditIcon />
                </div>
                <span className="hidden md:block"> Edit </span>
              </button>
            ) : (
              <button
                onClick={handleSaveData}
                className="absolute top-0 right-0 border-2 border-slate-500 text-slate-500 flex p-1 rounded-lg gap-2 md:px-3 font-bold text-sm hover:bg-green-50 hover:text-green-primary hover:border-green-primary"
              >
                <div className="grid size-5 font-bold">
                  <EditIcon />
                </div>
                <span className="hidden md:block"> Save </span>
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2">
          <div className="flex flex-row">
            <div className="border-2 border-slate-300 p-2 rounded-lg flex flex-col px-5">
              <h1 className="text-2xl font-bold text-green-primary">
                $3,585.69
              </h1>
              <span className="text-xs font-semibold text-slate-500">
                Balance
              </span>
            </div>
          </div>
          <div className="flex w-full h-full text-slate-300 items-center justify-center">
            There is space for more information here.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
