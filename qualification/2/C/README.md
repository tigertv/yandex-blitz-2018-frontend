Картинка с заданной вариативностью

Ограничение времени	100 секунд
Ограничение памяти	64Mb
Ввод	input.html
Вывод	output.png

PIC

Дизайнер разработал логотип. Его потребуется использовать в самых разных условиях. Чтобы это было максимально удобно, сверстайте его с помощью одного HTML-элемента на чистом CSS.
Использовать картинки (даже через data:uri) нельзя.

Примечания

Общая ширина: 180px
Общая высота: 180px
Размер секции 90 на 90px
Цвета:
темная секция: #654430
светлая секция: #f7ebcc
Шашка:
основной цвет #5f5d5e
обводка #252324
общий радиус: 28px
толщина обводки: 3px

Решение нужно предоставить в виде CSS-файла.
Ваш файл будет подключен как solution.css к HTML-странице вида:

<!DOCTYPE html>  
<html>  
    <head>  
        <meta http-equiv="Content-Security-Policy" content="default-src ’self’; style-src ’unsafe-inline’ ’self’"/>  
        <style>  
            div {  
                width: 180px;  
                height: 180px;  
            }  
        </style>  
        <link rel="stylesheet" href="solution.css">  
    </head>  
    <body>  
        <div></div>  
    </body>  
</html>
