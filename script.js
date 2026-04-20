const tabs = document.querySelectorAll('button[data-day]');
const days = document.querySelectorAll('div[data-day]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const selectedDay = tab.dataset.day;

        // переключаем табы
        tabs.forEach(t => {
            t.dataset.state = t === tab ? "active" : "inactive";
        });

        // переключаем дни
        days.forEach(day => {
            day.dataset.state = day.dataset.day === selectedDay ? "active" : "inactive";
        });
    });
});

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         const selectedDay = tab.dataset.day;

//         // переключаем табы
//         tabs.forEach(t => {
//             t.dataset.state = t === tab ? "active" : "inactive";
//         });
//     });
// });