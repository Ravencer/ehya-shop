<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$login = $_POST['login'];
$password = $_POST['password'];
$email = $_POST['emailNews'];
// Формирование самого письма
if($email <> ''){
  $title = "Новое обращение Ehya Shop";
  $body = "
  <h2>Новая подписка</h2>
  <b>Почта:</b> $email<br>
  ";
  $mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'lauriana880@gmail.com'; // Логин на почте
    $mail->Password   = 'Lauriana8802011'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('lauriana880@gmail.com', 'Boris Glushan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('ravencer880@gmail.com');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
}
elseif($login <> '' and $password <> ''){
  $title = "Новое обращение Ehya Shop";
  $body = "
  <h2>Новое обращение</h2>
  <b>Логин:</b> $login<br>
  <b>Пароль:</b> $password<br>
  ";
  $mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'lauriana880@gmail.com'; // Логин на почте
    $mail->Password   = 'Lauriana8802011'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('lauriana880@gmail.com', 'Boris Glushan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('ravencer880@gmail.com');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: modal-send.html');
}
else {
  header('Location: index.html');
}

// Настройки PHPMailer
