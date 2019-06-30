-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 30 2019 г., 22:57
-- Версия сервера: 5.7.25
-- Версия PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `webchat`
--

-- --------------------------------------------------------

--
-- Структура таблицы `friends`
--

CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `user_1` int(11) NOT NULL,
  `user_2` int(11) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `friends`
--

INSERT INTO `friends` (`id`, `user_1`, `user_2`, `status`) VALUES
(1, 5, 6, 'true'),
(2, 6, 13, 'true'),
(3, 5, 6, 'true'),
(4, 6, 13, 'true'),
(5, 5, 10, 'true'),
(6, 5, 13, 'true'),
(7, 5, 10, 'true'),
(8, 5, 13, 'true'),
(9, 6, 11, 'tre'),
(10, 12, 13, 'treu'),
(11, 6, 11, 'tre'),
(12, 12, 13, 'treu');

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `to_user_id` int(11) DEFAULT NULL,
  `message` text NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `messages`
--

INSERT INTO `messages` (`id`, `user_id`, `to_user_id`, `message`, `created`) VALUES
(1, 3, 2, 'asfdasfefeaefafeaeafeafawf', '2019-06-22 14:13:15'),
(2, 13, 1, 'обавлено через 8 минут\r\nromchiksoad, прочитал про буферизацию, но как мне это поможет?\r\nМожешь привести пример?', '2019-06-22 14:13:15'),
(3, 6, 2, 'asCsefgzsefzfzsefsezfsef', '2019-06-22 14:14:57'),
(4, 1, 2, 'test sql', '2019-06-22 15:32:29'),
(7, 1, NULL, 'На всякий случай повторю вопрос здесь.\r\nМне нужна кнопка отправить, только смысл в том, что бы кнопка создавала новую страницу для новости. Подскажите как сделать.\r\nВозможно ли осуществить такое на ucoz?', '2019-06-22 15:45:18'),
(8, 6, 1, 'Cordova wraps your HTML/JavaScript app into a native container which can access the device functions of several platforms. These functions are exposed via a unified JavaScript API, allowing you to easily write one set ...', '2019-06-22 14:14:57'),
(9, 6, 1, '21 апреля 2015 года команда Cordova (ранее PhoneGap) выпустила версию 5.0 своих инструментов, которые позволяют веб-разработчикам разрабатывать мобильные приложения сразу для ', '2019-06-30 12:04:52'),
(10, 6, 2, 'A tutorial that describes how to configure the IDE to create a mobile application using Cordova.', '2019-06-30 12:04:52'),
(13, 6, 1, 'last m for uid=6', '2019-06-30 12:13:04'),
(14, 10, NULL, 'slkjglskjflkjhsg', '2019-06-30 20:44:25'),
(15, 3, NULL, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2019-06-30 20:59:02');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `photo` varchar(200) NOT NULL DEFAULT '/media/cat.jpg',
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `photo`, `email`, `password`, `role`) VALUES
(1, 'admin', '/media/admin.png', 'admin@i.ua', '123456', 'admin'),
(3, 'user1', '/media/cat.jpg', 'user@i.ua', 'wassword', 'user'),
(5, 'qwe', '/media/cat.jpg', 'asdasda', 'qwe', 'user'),
(6, 'test', '/media/cat.jpg', '11111111111we', 'test', 'user'),
(9, 'ййцйцйц', '/media/cat.jpg', 'уцйцуйцуйцуйц', 'йцуйцуйцуйцуйцуйцу', 'user'),
(10, 'ubnt', '/media/cat.jpg', 'qqqqqqq', 'wqwqwq', 'user'),
(11, '11111111', '/media/cat.jpg', '2222222222', '33333333333', 'user'),
(12, 'newadmin', '/media/cat.jpg', 'mewmdsmd', '1234', 'user'),
(13, 'enother', '/media/cat.jpg', 'user', 'qwerty', 'user');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_1` (`user_1`),
  ADD KEY `user_2` (`user_2`);

--
-- Индексы таблицы `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`) USING BTREE;

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `friends_ibfk_1` FOREIGN KEY (`user_1`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `friends_ibfk_2` FOREIGN KEY (`user_2`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
