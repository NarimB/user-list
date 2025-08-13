import { useEffect, useState } from "react";
import { Button, Input, Spin } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { getUsers, type IUser } from "../../features/UsersSlice";
import { UserCard } from "../../components/UserCard/UserCard";
import "./UsersList.scss";

export function UsersList() {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.users);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user: IUser) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-list">
      <div className="users-list__search">
        <Input
          placeholder="Search by name"
          allowClear
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="users-list__input"
        />
        <Button
          className="users-list__button"
          onClick={() => dispatch(getUsers())}
        >
          Refresh
        </Button>
      </div>
      {!loading ? (
        <div className="users-list__cards">
          {filteredUsers.length ? (
            filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                name={user.name}
                email={user.email}
                address={user.address}
              />
            ))
          ) : (
            <p>User not found</p>
          )}
        </div>
      ) : (
        <div className="user-spinner">
          <Spin size="large" />
        </div>
      )}
    </div>
  );
}
