CREATE TABLE likes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
   id_recipe VARCHAR(200) NOT NULL,
  nama VARCHAR(200) NOT NULL,
  id_nama VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE recipe (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  ingredients VARCHAR(200) NOT NULL,
  category VARCHAR(200) NOT NULL,
  photo VARCHAR NOT NULL,
  user_id VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE comment (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  id_recipe VARCHAR(200) NOT NULL,
  id_profil VARCHAR(200) NOT NULL,
  nama VARCHAR(200) NOT NULL,
  commentar VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE recipe (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  ingredients VARCHAR(200) NOT NULL,
  category VARCHAR(200) NOT NULL,
  photo VARCHAR NOT NULL,
  user_id VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);