const User = `
CREATE TABLE IF NOT EXISTS
users(
    "id" VARCHAR(128) PRIMARY KEY NOT NULL,
    "firstName" VARCHAR(128) NOT NULL,
    "lastName" VARCHAR(128) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "password" VARCHAR(500) NOT NULL,
    "gender" VARCHAR(128) NOT NULL,
    "jobRole" VARCHAR(128) NOT NULL,
    "department" VARCHAR(128) NOT NULL,
    "address" VARCHAR(128) NOT NULL,
    "avatarUrl" VARCHAR(128) NOT NULL,
    "userRole" VARCHAR(128) NOT NULL,
    Unique(email)
)
`;

export default User;
