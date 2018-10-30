import bannerImg from '../assets/banner.jpg'

export default () => {
    return `
<div class="page__wrapper">
    <div class="page__wrapper-content">
        <header class="header">
            <div class="logo header__logo">
                <a href="#" class="link logo__ya"></a>
                <a href="#" class="link logo__ya-sub"></a>
            </div>

            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <a href="#" class="link menu__link link_active">Сводка</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="link menu__link">Устройства</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="link menu__link">Сценарии</a>
                    </li>
                </ul>
            </nav>

            <div class="menu__icon">
                <svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <path d="M0 3.326a.995.995 0 0 1 1-.993h14c.552 0 1 .44 1 .993v.681A.995.995 0 0 1 15 5H1c-.552 0-1-.44-1-.993v-.68zM0 8.66a.995.995 0 0 1 1-.993h14c.552 0 1 .44 1 .993v.68a.995.995 0 0 1-1 .993H1c-.552 0-1-.44-1-.993v-.68zm0 5.333A.995.995 0 0 1 1 13h14c.552 0 1 .44 1 .993v.68a.995.995 0 0 1-1 .994H1c-.552 0-1-.44-1-.993v-.681z"
                              id="a"/>
                    </defs>
                    <use fill="#333" xlink:href="#a" transform="translate(0 -2)" fill-rule="evenodd"/>
                </svg>
            </div>
        </header>

        <main class="content">
            <div class="content__item content__item_half content__item_main">
                <div class="content__item-header">Главное</div>
                <section class="main">
                    <div class="main__info">
                        <div class="main__greeting">Привет, Геннадий!</div>
                        <div class="main__status">Двери и окна закрыты, сигнализация включена.</div>
                        <div class="weather main__weather">
                            <div class="weather__item">
                                <div class="weather__item-title">Дома</div>
                                <div class="weather__item-temp">+23</div>
                            </div>
                            <div class="weather__item weather__item_outside weather__item_cloud-drizzle">
                                <div class="weather__item-title">За окном</div>
                                <div class="weather__item-temp">+19</div>
                            </div>
                        </div>
                    </div>
                    <div class="main__upcoming-wrapper">
                        <div class="main__upcoming">
                            <div class="panel main__panel panel_device panel_first">
                                <div class="panel__icon panel__icon_temp_off"></div>
                                <div class="panel__text">
                                    <div class="panel__title">Philips Cooler</div>
                                    <div class="panel__sub">Начнет охлаждать в 16:30</div>
                                </div>
                            </div>
                            <div class="panel main__panel panel_device">
                                <div class="panel__icon panel__icon_light_off"></div>
                                <div class="panel__text">
                                    <div class="panel__title">Xiaomi Yeelight LED Smart Bulb</div>
                                    <div class="panel__sub">Включится в 17:00</div>
                                </div>
                            </div>
                            <div class="panel main__panel panel_device panel_out_bot">
                                <div class="panel__icon panel__icon_light_off"></div>
                                <div class="panel__text">
                                    <div class="panel__title">Xiaomi Yeelight LED Smart Bulb</div>
                                    <div class="panel__sub">Включится в 17:00</div>
                                </div>
                            </div>
                            <div class="panel main__panel panel_device panel_out_bot">
                                <img src="${bannerImg}">
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="content__item content__item_half content__item_scenarios">
                <div class="content__item-header">
                    Избранные сценарии
                </div>
                <div class="paginator scenarios__paginator">
                    <div class="paginator__arrow paginator__arrow_disabled paginator__arrow_left">
                        <svg viewBox="0 0 9 16" width="100%" height="16px">
                            <path fill="currentColor" fill-rule="evenodd"
                                  d="M8.7 14.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-7-7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.4 8l6.3 6.3z"></path>
                        </svg>
                    </div>
                    <div class="paginator__arrow paginator__arrow_right">
                        <svg viewBox="0 0 9 16" width="100%" height="16px">
                            <path fill="currentColor" fill-rule="evenodd"
                                  d="M.3 14.3c-.4.4-.4 1.02 0 1.4.38.4 1 .4 1.4 0l7-7c.4-.4.4-1.02 0-1.4l-7-7C1.3-.1.68-.1.3.3c-.4.38-.4 1 0 1.4L6.6 8 .3 14.3z"></path>
                        </svg>
                    </div>
                </div>
                <section class="scenarios">
                    <div class="scenarios__page">
                        <div class="panel scenarios__panel">
                            <div class="panel__icon panel__icon_light_on"></div>
                            <div class="panel__text">
                                <div class="panel__title">Выключить весь свет в доме и во дворе</div>
                            </div>
                        </div>

                        <div class="panel scenarios__panel">
                            <div class="panel__icon panel__icon_clock"></div>
                            <div class="panel__text">
                                <div class="panel__title">Я ухожу</div>
                            </div>
                        </div>

                        <div class="panel scenarios__panel">
                            <div class="panel__icon panel__icon_light_on"></div>
                            <div class="panel__text">
                                <div class="panel__title">Включить свет в корридоре</div>
                            </div>
                        </div>

                        <div class="panel scenarios__panel">
                            <div class="panel__icon panel__icon_temp_on"></div>
                            <div class="panel__text">
                                <div class="panel__title">Набрать горячую ванну</div>
                                <div class="panel__sub">Начнётся в 18:00</div>
                            </div>
                        </div>

                        <div class="panel scenarios__panel">
                            <div class="panel__icon panel__icon_light_on"></div>
                            <div class="panel__text">
                                <div class="panel__title">Выключить весь свет в доме и во дворе</div>
                            </div>
                        </div>

                        <div class="panel scenarios__panel">
                            <div class="panel__icon panel__icon_clock"></div>
                            <div class="panel__text">
                                <div class="panel__title">Я ухожу</div>
                            </div>
                        </div>

                        <div class="panel scenarios__panel">
                            <div class="panel__icon panel__icon_light_on"></div>
                            <div class="panel__text">
                                <div class="panel__title">Включить свет в корридоре</div>
                            </div>
                        </div>

                        <div class="panel scenarios__panel">
                            <div class="panel__icon panel__icon_temp_on"></div>
                            <div class="panel__text">
                                <div class="panel__title">Набрать горячую ванну</div>
                                <div class="panel__sub">Начнётся в 18:00</div>
                            </div>
                        </div>

                        <div class="panel scenarios__panel">
                            <div class="panel__icon panel__icon_light_on"></div>
                            <div class="panel__text">
                                <div class="panel__title">Выключить весь свет в доме и во дворе</div>
                            </div>
                        </div>
                    </div>

                    <div class="scenarios__page">
                        <div class="panel scenarios__panel">
                            <div class="panel__icon panel__icon_clock"></div>
                            <div class="panel__text">
                                <div class="panel__title">Я ухожу</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="content__item content__item_devices">
    <span class="content__item-header content__item-header_devices">
    Избранные устройства
</span>

                <div class="filter__select">
                    <button class="filter__select-button" type="button">
                        <span class="button__text">Все</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6">
                            <path d="M10.3 0L5.5 4.7.7 0 0 .7 5.5 6 11 .7z"/>
                        </svg>
                    </button>
                    <div class="filter__select-popup" aria-hidden="true">
                        <div class="filter__select-menu">
                            <div class="filter__select-item filter__select-item_checked" data-group="all">Все</div>
                            <div class="filter__select-item" data-group="kitchen">Кухня</div>
                            <div class="filter__select-item" data-group="room">Зал</div>
                            <div class="filter__select-item" data-group="lamp">Лампочки</div>
                            <div class="filter__select-item" data-group="cam">Камеры</div>
                        </div>
                    </div>
                </div>

                <input class="filter__item-radio filter__item_devices filter__item-radio_all" type="radio" name="filter"
                       id="all" checked>
                <label class="filter__item-label filter__item_devices" for="all">Все</label>
                <input class="filter__item-radio filter__item_devices filter__item-radio_kitchen" type="radio"
                       name="filter" id="kitchen">
                <label class="filter__item-label filter__item_devices" for="kitchen">Кухня</label>
                <input class="filter__item-radio filter__item_devices filter__item-radio_room" type="radio"
                       name="filter" id="room">
                <label class="filter__item-label filter__item_devices" for="room">Зал</label>
                <input class="filter__item-radio filter__item_devices filter__item-radio_lamp" type="radio"
                       name="filter" id="lamp">
                <label class="filter__item-label filter__item_devices" for="lamp">Лампочки</label>
                <input class="filter__item-radio filter__item_devices filter__item-radio_cam" type="radio" name="filter"
                       id="cam">
                <label class="filter__item-label filter__item_devices" for="cam">Камеры</label>

                <div class="paginator devices__paginator">
                    <div class="paginator__arrow paginator__arrow_disabled paginator__arrow_left">
                        <svg
                                viewBox="0 0 9 16"
                                width="100%"
                                height="16px">
                            <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M8.7 14.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-7-7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.4 8l6.3 6.3z"></path>
                        </svg>
                    </div>

                    <div class="paginator__arrow paginator__arrow_right">
                        <svg
                                viewBox="0 0 9 16"
                                width="100%"
                                height="16px">
                            <path
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    d="M.3 14.3c-.4.4-.4 1.02 0 1.4.38.4 1 .4 1.4 0l7-7c.4-.4.4-1.02 0-1.4l-7-7C1.3-.1.68-.1.3.3c-.4.38-.4 1 0 1.4L6.6 8 .3 14.3z"></path>
                        </svg>
                    </div>
                </div>

                <section class="devices">
                    <div class="panel panel_device devices__panel panel_room panel_floor">
                        <div class="panel__icon panel__icon_light_on"></div>
                        <div class="panel__text">
                            <div class="panel__title">Xiaomi Warm Floor</div>
                            <div class="panel__sub">Включено</div>
                        </div>
                    </div>
                    <div class="panel panel_device devices__panel panel_lamp">
                        <div class="panel__icon panel__icon_light_on"></div>
                        <div class="panel__text">
                            <div class="panel__title">Xiaomi Yeelight LED Smart Bulb</div>
                            <div class="panel__sub">Включено</div>
                        </div>
                    </div>
                    <div class="panel panel_device devices__panel panel_cam">
                        <div class="panel__icon panel__icon_light_off"></div>
                        <div class="panel__text">
                            <div class="panel__title">D-Link Omna 180 Cam</div>
                            <div class="panel__sub">Включится в 17:00</div>
                        </div>
                    </div>
                    <div class="panel panel_device devices__panel panel_room panel_temp">
                        <div class="panel__icon panel__icon_temp_off"></div>
                        <div class="panel__text">
                            <div class="panel__title">Elgato Eve Degree Connected</div>
                            <div class="panel__sub">Включится в 17:00</div>
                        </div>
                    </div>
                    <div class="panel panel_device devices__panel panel_lamp">
                        <div class="panel__icon panel__icon_light_off"></div>
                        <div class="panel__text">
                            <div class="panel__title">LIFX Mini Day & Dusk A60 E27</div>
                            <div class="panel__sub">Включится в 17:00</div>
                        </div>
                    </div>
                    <div class="panel panel_device devices__panel panel_room">
                        <div class="panel__icon panel__icon_light_on"></div>
                        <div class="panel__text">
                            <div class="panel__title">Xiaomi Mi Air Purifier 2S</div>
                            <div class="panel__sub">Включено</div>
                        </div>
                    </div>
                    <div class="panel panel_device devices__panel panel_lamp">
                        <div class="panel__icon panel__icon_light_off"></div>
                        <div class="panel__text">
                            <div class="panel__title">Philips Zhirui</div>
                            <div class="panel__sub">Выключено</div>
                        </div>
                    </div>
                    <div class="panel panel_device devices__panel panel_kitchen">
                        <div class="panel__icon panel__icon_light_on"></div>
                        <div class="panel__text">
                            <div class="panel__title">Philips Purifier</div>
                            <div class="panel__sub">Включено</div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>

    <footer class="footer">
        <a href="#" class="link footer__link">Помощь</a>
        <a href="#" class="link footer__link">Обратная связь</a>
        <a href="#" class="link footer__link">Разработчикам</a>
        <a href="#" class="link footer__link">Условия использования</a>
    </footer>
</div>

<div class="modal modal_temp">
    <div class="modal__content">

        <div class="modal__body">
            <div class="modal__title">Elgato Eve Degree Connected</div>
            <div class="modal__value modal__value_temp">+23</div>
            <div class="modal__status">Включено</div>
            <div class="modal__filter">
                <div class="filter__item-label modal__filter-item_temp" id="manual">Вручную</div>
                <div class="filter__item-label modal__filter-item_temp" id="cold">Холодно</div>
                <div class="filter__item-label modal__filter-item_temp" id="warm">Тепло</div>
                <div class="filter__item-label modal__filter-item_temp" id="hot">Жарко</div>
            </div>
            <div class="adjust-bar__container adjust-bar__container_theme_temp modal__adjust">
                <input class="adjust-bar adjust-bar_theme_temp" type="range" name="lightRange" id="lightRange"
                       value="23" min="-10" max="30" orient="vertical">
            </div>
        </div>

        <div class="modal__controls">
            <div class="button button_size_l button_color_yellow modal__button">Применить</div>
            <div class="button button_size_l modal__button modal_close">Закрыть</div>
        </div>
    </div>

</div>

<div class="modal modal_light">
    <div class="modal__content">

        <div class="modal__body">
            <div class="modal__title">Xiaomi Yeelight LED Smart Bulb</div>
            <div class="modal__value modal__value_light"></div>
            <div class="modal__status">Включено</div>
            <div class="modal__filter">
                <div class="filter__item-label modal__filter-item" id="manual">Вручную</div>
                <div class="filter__item-label modal__filter-item" id="day">Дневной свет</div>
                <div class="filter__item-label modal__filter-item" id="evening">Вечерний свет</div>
                <div class="filter__item-label modal__filter-item" id="dawn">Рассвет</div>
            </div>
            <div class="adjust-bar__container adjust-bar__container_theme_light modal__adjust">
                <input class="adjust-bar adjust-bar_theme_light" type="range" name="tempRange" id="lightRange"
                       value="25" min="0" max="50" orient="vertical">
            </div>
        </div>

        <div class="modal__controls">
            <div class="button button_size_l button_color_yellow modal__button">Применить</div>
            <div class="button button_size_l modal__button modal_close">Закрыть</div>
        </div>
    </div>
</div>
<div class="stats">
</div>

<div class="modal modal_knob">
    <div class="modal__content">

        <div class="modal__body">
            <div class="modal__title">Xiaomi Warm Floor</div>
            <div class="modal__value modal__value_temp">+23</div>
            <div class="modal__status">Включено</div>
            <div class="knob__wrapper">
                <div class="knob">
                    <svg viewBox="-110 -110 220 220" id="foobar">
                        <filter id="knob-shadow">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                            <feOffset dx="2" dy="0" result="offsetblur"/>
                            <feFlood flood-color="rgba(134,121,71,0.45)"/>
                            <feComposite in2="offsetblur" operator="in"/>
                            <feMerge>
                                <feMergeNode/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <g class="knob-container">
                            <circle class="knob_center" cx="0" cy="0"/>
                            <circle class="knob__indicator-bg" r="110" cx="0" cy="0"/>
                            <circle class="knob__indicator" r="100" cx="0" cy="0"/>
                            <circle class="knob__indicator-mask" r="100" cx="0" cy="0"/>
                            <circle class="knob__indicator-bounds" r="100" cx="0" cy="0"/>
                            <circle class="knob__self" r="89" cx="0" cy="0"/>
                            <!-- <polygon class="knob__arrow" points="5,-90 0,-85 10,-85" /> -->
                            <polygon class="knob__arrow" points="-90,0 -85,5 -85,-5"/>
                        </g>
                    </svg>
                    <div class="knob__value">+23</div>
                </div>
            </div>
        </div>

        <div class="modal__controls">
            <div class="button button_size_l button_color_yellow modal__button">Применить</div>
            <div class="button button_size_l modal__button modal_close">Закрыть</div>
        </div>
    </div>
</div>
    `
}

