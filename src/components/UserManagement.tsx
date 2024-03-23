import { FunctionComponent, useEffect, useState } from "react";
import { trpc } from "@/utils/trpc";
import Cookies from "js-cookie";
import { User } from "@/types";
import styled from "styled-components";

type Props = {
  user: User;
};

export const UserManagement: FunctionComponent<Props> = ({ user }) => {
  const [users, setUsers] = useState<User[]>([]);
  const userPermissions = user.permissions;
  if (
    user.role !== "admin" ||
    user.disabled ||
    !userPermissions.includes("admin:read")
  )
    return null;
  const token = Cookies.get("token");
  if (!token) return null;
  const { data } = trpc.user.getAll.useQuery({
    token,
  });

  const updateUsers = trpc.user.update.useMutation();

  const isAllowedToWrite = userPermissions.includes("admin:write");

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  if (!data) return null;

  const setUser = (updatedUser: User) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const saveEdits = () => {
    updateUsers.mutate(
      { token, users },
      {
        onSuccess() {
          alert("Users updated successfully");
        },
        onError(error) {
          alert("Error updating users: " + error.message);
        },
      }
    );
  };

  return (
    <UserManagementInfoContainer>
      <h3>Users</h3>
      {users.map((user) => (
        <UserInfoContainer key={user.id}>
          <StyledForm>
            <label>
              ID:
              <input type="text" value={user.id} readOnly />
            </label>
            <label>
              Name:
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                readOnly={!isAllowedToWrite}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                readOnly={!isAllowedToWrite}
              />
            </label>
            <label>
              Role:
              <input
                type="text"
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
                readOnly={!isAllowedToWrite}
              />
            </label>
            <label>
              Permissions:
              <input
                type="text"
                value={user.permissions}
                onChange={(e) =>
                  setUser({ ...user, permissions: e.target.value })
                }
                readOnly={!isAllowedToWrite}
              />
            </label>
            <label>
              Disabled:
              <input
                type="checkbox"
                checked={Boolean(user.disabled)}
                onChange={(e) =>
                  setUser({ ...user, disabled: e.target.checked ? 1 : 0 })
                }
                readOnly={!isAllowedToWrite}
              />
            </label>
          </StyledForm>
        </UserInfoContainer>
      ))}
      <button onClick={saveEdits} disabled={!isAllowedToWrite}>
        Save
      </button>
    </UserManagementInfoContainer>
  );
};

const UserManagementInfoContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
