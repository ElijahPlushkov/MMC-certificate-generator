# MMC Certificate Generator

Веб-приложение для автоматического расчета баллов Кембриджских экзаменов, генерации PDF-сертификатов и экспорта результатов для отслеживания прогресса.

## 🎯 Какую проблему решает

Проверка тестов Кембриджской линейки (Cambridge English Qualifications) — трудоемкий процесс. После самой проверки преподавателям необходимо:

1.  Конвертировать первичные баллы в стандартизированную шкалу Кембриджа.
2.  Определить соответствующий уровень владения языком (например, A2, B1, B2).
3.  Вручную заполнить сертификат для каждого ученика.
4.  Подготовить сертификаты к печати.
5.  Вести учет результатов для анализа прогресса и планирования дальнейшего обучения.

Этот многоэтапный процесс не только отнимает много времени, но и подвержен ошибкам при конвертации баллов, заполнении данных или ведении учета.

**MMC Certificate Generator** был создан, чтобы автоматизировать и упростить этот процесс, освобождая время преподавателей и минимизируя риск неточностей.

## ✨ Основные возможности

*   **Автоматический расчет баллов:** Конвертирует результаты тестов (например, количество правильных ответов по секциям Reading, Writing, Listening, Speaking) в официальную шкалу Кембриджа.
*   **Генерация PDF-сертификатов:** Создает персонализированные сертификаты в формате PDF, готовые к печати, на основе введенных данных и рассчитанных баллов.
*   **Экспорт данных для отслеживания:** После успешной генерации сертификата данные студента (имя, фамилия, экзамен, итоговый результат) автоматически подготавливаются и экспортируются в формате, совместимом с Excel (например, CSV файл или данные для копирования). Это позволяет легко вести таблицу для мониторинга успеваемости и планирования следующих экзаменов (например, переход с Flyers на A2 Key).
*   **Добавление сопроводительного письма:** Позволяет прикрепить или добавить текст письма от преподавателя/школы к сертификату.
*   **Локальная работа:** Приложение работает полностью в браузере пользователя без необходимости подключения к Интернету после загрузки файлов.
*   **Кроссплатформенность:** Запускается в любом современном браузере на любой операционной системе (Windows, macOS, Linux).

## 📚 Поддерживаемые экзамены

Приложение поддерживает расчет баллов и генерацию сертификатов для всей стандартной линейки Кембриджских экзаменов:

*   **Young Learners (YLE):**
    *   Pre A1 Starters
    *   A1 Movers
    *   A2 Flyers
*   **General and Higher Education:**
    *   A2 Key (KET) / A2 Key for Schools
    *   B1 Preliminary (PET) / B1 Preliminary for Schools
    *   B2 First (FCE) / B2 First for Schools
    *   C1 Advanced (CAE)
    *   C2 Proficiency (CPE)

## 🖼️ Скриншоты интерфейса

![Alt text]([/relative/path/to/img.jpg?raw=true "Optional Title"](https://github.com/ElijahPlushkov/MMC-certificate-generator/blob/main/Pasted%20image%2020250321185515.png))

![Alt text]([http://full/path/to/img.jpg "Optional title"](https://github.com/ElijahPlushkov/MMC-certificate-generator/blob/main/Pasted%20image%2020250321185620.png))

## 🛠️ Технологии

*   **Frontend:** HTML, CSS, JavaScript
*   **PDF Генерация:** [jsPDF](https://github.com/parallax/jsPDF)
*   **(Опционально) Экспорт данных:** (Укажи, если используется конкретная библиотека для CSV, например, PapaParse, или это просто вывод данных для копирования)

## 🚀 Установка и запуск

Приложение не требует сложной установки или настройки сервера.

1.  **Скачайте файлы проекта:**
    *   Либо клонируйте репозиторий:
        ```bash
        git clone https://github.com/yourusername/mmc-certificate-generator.git
        ```
    *   Либо скачайте ZIP-архив репозитория и распакуйте его на своем компьютере.
2.  **Откройте главный файл:**
    *   Перейдите в папку с распакованными файлами.
    *   Откройте файл `index.html` в вашем веб-браузере (например, Google Chrome, Firefox, Safari, Edge).

## ⚙️ Использование

1.  Откройте `index.html` в браузере.
2.  Заполните необходимые поля в интерфейсе:
    *   Информация о студенте (имя, фамилия и т.д.).
    *   Название сданного экзамена.
    *   Результаты теста (баллы по секциям).
    *   (Опционально) Добавьте текст сопроводительного письма.
3.  Нажмите кнопку "Сгенерировать сертификат" (или аналогичную).
4.  Приложение автоматически рассчитает итоговые баллы, определит уровень и создаст PDF-файл сертификата.
5.  Браузер предложит сохранить сгенерированный PDF-файл на ваш компьютер.
6.  Одновременно с генерацией PDF, данные (Имя, Фамилия, Экзамен, Результат) будут подготовлены для экспорта. Вам будет предложено скачать CSV-файл или скопировать данные для вставки в вашу Excel-таблицу. *(Уточни реальный механизм экспорта: скачивание файла, копирование в буфер обмена и т.д.)*

Интерфейс спроектирован так, чтобы быть максимально простым и интуитивно понятным.

## 📄 Лицензия

Этот проект распространяется под лицензией MIT.
