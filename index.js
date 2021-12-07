var birthday_input;
var today_input;

var birthday_Entered;
var today_Entered;

var birth_year;
var birth_month;
var birth_day;

var today_year;
var today_month;
var today_day;

var age_year;

function age_calculator() {
  birthday_input = document.getElementById('birth_day').value;

  birthday_Entered = new Date(birthday_input);

  today_input = document.getElementById('today').value;

  today_Entered = new Date(today_input);

  //calculate the difference of dates
  var diffInMillisecond = today_Entered.valueOf() - birthday_Entered.valueOf();
  var year_age = Math.floor(diffInMillisecond / 31556952000);
  var month_age = Math.floor((diffInMillisecond / 2629746000) % 12);
  var day_age = Math.floor(diffInMillisecond / 86400000 / 365);

  var total_months = Math.floor(diffInMillisecond / 2629746000);
  var total_weeks = Math.floor(diffInMillisecond / 604800000);
  var total_days = Math.floor(diffInMillisecond / 86400000);
  var total_hours = Math.floor(diffInMillisecond / 3600000);
  var total_minutes = Math.floor(diffInMillisecond / 60000);

  //when birth date and month is same as today's date
  if (
    today_Entered.getMonth() == birthday_Entered.getMonth() &&
    today_Entered.getDate() == birthday_Entered.getDate()
  ) {
    alert('Happy Birthday!');
  }

  //DOB is greater than today's date, generate an error: Invalid date
  if (birthday_Entered > today_Entered) {
    alert('Enter Correct Details!');
  } else {
    document.getElementById('age_card_years').innerHTML = year_age;
    document.getElementById('age_card_months').innerHTML = month_age;
    document.getElementById('age_card_days').innerHTML = day_age;

    document.getElementById('summary_card_years').innerHTML = year_age;
    document.getElementById('summary_card_months').innerHTML = total_months;
    document.getElementById('summary_card_weeks').innerHTML = total_weeks;

    document.getElementById('summary_card_days').innerHTML = total_days;
    document.getElementById('summary_card_hours').innerHTML = total_hours;
    document.getElementById('summary_card_minutes').innerHTML = total_minutes;
  }

  //Set current year or the next year if you already had birthday this year
  birthday_Entered.setFullYear(today_Entered.getFullYear());
  if (today_Entered > birthday_Entered) {
    console.log(birthday_Entered.setFullYear(today_Entered.getFullYear() + 1));
  }

  //Calculate difference between days
  time_remain = Math.floor((birthday_Entered - today_Entered) / 86400000);
  console.log(time_remain);
  months_remaining = Math.floor(time_remain / 31);
  days_remaining = time_remain % 31;
  document.getElementById('birthday_card_months').innerHTML = months_remaining;
  document.getElementById('birthday_card_days').innerHTML = days_remaining;
}

// Dark Mode Toggle
const checkbox = document.getElementById('checkbox');
var birth = document.getElementById('birth_day');
var today = document.getElementById('today');
var age_card = document.getElementById('age_card');
var label = document.getElementById('label');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('theme_dark');
  birth.classList.toggle('theme_dark');
  today.classList.toggle('theme_dark');
  age_card.classList.toggle('theme_darker');
  label.classList.toggle('theme_darker');
});
