"use client";
import React, { useState } from "react";
import { useMakeNotificationMutation } from "../../redux/featuers/pushNotification/pushApi";

const NotificationForm = () => {
  const [makeNotification] = useMakeNotificationMutation();
  const [formData, setformData] = useState({
    fcmtoken: "",
    title: "",
    body: "",
    image: "",
    icon: "",
    openURL: "",
  });

  const resetForm = () => {
    setformData({
      fcmtoken: "",
      title: "",
      body: "",
      image: "",
      icon: "",
      openURL: "",
    });
  };

  const onChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    makeNotification(formData)
      .unwrap()
      .then((res) => {
        alert("Notification Sent Successfully");
        resetForm();
      });
  };

  return (
    <div className="flex flex-col justify-center items-center border rounded-md px-5 py-3 w-1/5">
      <h1 className="text-2xl py-3">Notification Content</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center space-y-2 w-full"
      >
        <textarea
          className="py-2 px-1 w-full rounded-md text-gray-600"
          type="text"
          placeholder="Device FCM Token"
          name="fcmtoken"
          value={formData.fcmtoken}
          onChange={onChange}
        />
        <input
          className="py-2 px-1 rounded-md text-gray-600 w-full"
          type="text"
          placeholder="Notification Title"
          name="title"
          value={formData.title}
          onChange={onChange}
        />
        <input
          className="py-2 px-1 rounded-md text-gray-600 w-full"
          type="text"
          placeholder="Notification Body"
          name="body"
          value={formData.body}
          onChange={onChange}
        />
        <input
          className="py-2 px-1 rounded-md text-gray-600 w-full"
          type="text"
          placeholder="Notification Image"
          name="image"
          value={formData.image}
          onChange={onChange}
        />
        <input
          className="py-2 px-1 rounded-md text-gray-600 w-full"
          type="text"
          placeholder="Notification Icon"
          name="icon"
          value={formData.icon}
          onChange={onChange}
        />
        <input
          className="py-2 px-1 rounded-md text-gray-600 w-full"
          type="text"
          placeholder="Notification Action URL"
          name="openURL"
          value={formData.openURL}
          onChange={onChange}
        />
        <button
          className="bg-green-700 py-2 px-2 hover:bg-green-800 rounded-md"
          type="submit"
        >
          Notify
        </button>
      </form>
    </div>
  );
};

export default NotificationForm;
