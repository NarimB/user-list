import { Link } from "react-router";
import userAvatar from "../../assets/user-avatar.jpg";
import "./UserCard.scss";

export interface User {
  id: number;
  avatar?: string;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

export function UserCard(props: User) {
  const { id, avatar, name, email, address } = props;
  return (
    <Link to={`/users/${id}`}>
      <div className="user-card">
        <img
          className="user-card__avatar"
          src={avatar || userAvatar}
          alt={`${name}'s avatar`}
        ></img>
        <div className="user-card__info">
          <h2 className="user-card__name">{name}</h2>
          <p className="user-card__email">{email}</p>
          <p className="user-card__city">{address?.city}</p>
        </div>
      </div>
    </Link>
  );
}
