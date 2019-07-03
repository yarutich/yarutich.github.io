$(document).ready(function () {
    var items = $('ul.uk-list');

    $('ul li.sofa').click(function () {
        items.removeClass('uk-visible').addClass('uk-hidden');
        $(this).addClass('uk-active');
        if ($(this).hasClass('uk-active')) {
            $('ul.sofa-list').removeClass('uk-hidden').addClass('uk-visible');
        }
    });

    $('ul li.armchair').click(function () {
        items.removeClass('uk-visible').addClass('uk-hidden');
        $(this).addClass('uk-active');
        if ($(this).hasClass('uk-active')) {
            $('ul.armchair-list').removeClass('uk-hidden').addClass('uk-visible');
        }
    });

    $('ul li.table').click(function () {
        items.removeClass('uk-visible').addClass('uk-hidden');
        $(this).addClass('uk-active');
        if ($(this).hasClass('uk-active')) {
            $('ul.table-list').removeClass('uk-hidden').addClass('uk-visible');
        }
    });

    $('ul li.chair').click(function () {
        items.removeClass('uk-visible').addClass('uk-hidden');
        $(this).addClass('uk-active');
        if ($(this).hasClass('uk-active')) {
            $('ul.chair-list').removeClass('uk-hidden').addClass('uk-visible');
        }
    });

    $('ul li.all').click(function () {
        items.removeClass('uk-visible').addClass('uk-hidden');
        $(this).addClass('uk-active');
        if ($(this).hasClass('uk-active')) {
            $('ul.all-list').removeClass('uk-hidden').addClass('uk-visible');
        }
    });
})