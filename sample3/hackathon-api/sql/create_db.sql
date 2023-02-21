DROP DATABASE IF EXISTS hackathon;

CREATE TABLE `hackathon`.`causes` (
      `id` INT NOT NULL,
      `fa` NVARCHAR(50) NULL,
      `en` NVARCHAR(50) NULL,
      PRIMARY KEY (`id`),
      UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `hackathon`.`people_en` (
     `id` INT NOT NULL AUTO_INCREMENT,
     `full_name` NVARCHAR(150) NOT NULL,
     `age` NVARCHAR(30) NULL,
     `location` NVARCHAR(50) NULL,
     `province_id` INT NOT NULL DEFAULT 0,
     `date` NVARCHAR(50) NOT NULL,
     `cause_id` INT NOT NULL DEFAULT 0,
     `thumb_url` TEXT(250) NULL,
     `image_url` TEXT(250) NULL,
     `event` INT NOT NULL DEFAULT 0,
     PRIMARY KEY (`id`),
     UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

CREATE TABLE `hackathon`.`people_fa` (
     `id` INT NOT NULL AUTO_INCREMENT,
     `full_name` NVARCHAR(150) NOT NULL,
     `age` NVARCHAR(30) NULL,
     `location` NVARCHAR(50) NULL,
     `province_id` INT NOT NULL DEFAULT 0,
     `date` NVARCHAR(50) NOT NULL,
     `cause_id` INT NOT NULL DEFAULT 0,
     `thumb_url` TEXT(250) NULL,
     `image_url` TEXT(250) NULL,
     `event` INT NOT NULL DEFAULT 0,
     PRIMARY KEY (`id`),
     UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

CREATE TABLE `hackathon`.`provinces` (
    `id` INT NOT NULL,
    `code` INT NOT NULL,
    `fa` NVARCHAR(50) NULL,
    `en` NVARCHAR(50) NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);
