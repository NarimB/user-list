import { useEffect } from "react";
import { useParams } from "react-router";
import { Spin } from "antd";
import userAvatar from "../../assets/user-avatar.jpg";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { getUserById } from "../../features/UsersSlice";
import "./UserDetails.scss";

export function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (id) {
      dispatch(getUserById(Number(id)));
    }
  }, [dispatch, id]);

  if (loading)
    return (
      <div className="user-spinner">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="user-page">
      <img
        className="user-page__avatar"
        src={user?.avatar || userAvatar}
        alt="user avatar"
      ></img>
      <div className="user-page__info">
        <h1 className="user-page__name">{user?.name}</h1>
        <p className="user-page__email">Email: {user?.email}</p>
        <p className="user-page__phone">Phone: {user?.phone}</p>
      </div>
    </div>
  );
}
