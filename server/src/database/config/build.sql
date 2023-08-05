BEGIN;
DROP TABLE IF EXISTS users, busines_users, individual_users;

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(13) NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    business_users(
        id BIGINT PRIMARY KEY REFERENCES users (id) ON DELETE CASCADE,
        company_name VARCHAR(255) NOT NULL,
        address TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    individual_users (
        id BIGINT PRIMARY KEY REFERENCES users (id) ON DELETE CASCADE,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        gender VARCHAR CHECK (
            gender IN('male', 'female', 'other')
        ),
        address TEXT NOT NULL,
        birth_date date NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

COMMIT;