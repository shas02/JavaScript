// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі

function wakeUp(isWakedUp, cb) {
    setTimeout(() => {
        if (isWakedUp) {
            console.log('Доброго ранку Світ, я прокинувся');
            cb(null, 'Переходио до наступної задачі');
        } else {
            cb('Я ще не прокинувся!');
        }
    }, 1000);
}

function goWithDog(isGoing, cb) {
    setTimeout(() => {
        if (isGoing) {
            console.log('Йдемо гуляти. Гав-Гав!');
            cb(null, 'Переходио до наступної задачі');
        } else {
            cb('Собака ще спить');
        }
    }, 500);
}

function cookBreakfast(isCooking, cb) {
    setTimeout(() => {
        if (isCooking) {
            console.log('Сніданок готовий!');
            cb(null, 'Переходио до наступної задачі');
        } else {
            cb('Сьогодні без сніданку :(');
        }
    }, 600);
}

function work(isWorking, cb) {
    setTimeout(() => {
        if (isWorking) {
            console.log('Money money money!');
            cb(null, 'Переходио до наступної задачі');
        } else {
            cb('Сьогодні не працюємо!');
        }
    }, 300);
}

function learnPrograming(isLearning, cb) {
    setTimeout(() => {
        if (isLearning) {
            console.log('Буду як Нео: зламаю Матрицю, і звільню Зіон!');
            cb(null, 'Переходио до наступної задачі');
        } else {
            cb('Щось сьогодні не вчиться :(');
        }
    }, 540);
}

function goToTheATB(isGoing, cb) {
    setTimeout(() => {
        if (isGoing) {
            console.log('В нас є 6 пачок туалетного паперу!. Сри скільки хочеш :) ');
            cb(null, 'Переходио до наступної задачі');
        } else {
            cb('Сьогдні знов не буду срати :(');
        }
    }, 500);
}

function sportExercises(isSporting, cb) {
    setTimeout(() => {
        if (isSporting) {
            console.log('Буду як Арні!');
            cb(null, 'Переходио до наступної задачі');
        } else {
            cb('Сьогдні відпочиваю :)');
        }
    }, 1000);
}


function seeTheJokesOnYouTube(isSeeing, cb) {
    setTimeout(() => {
        if (isSeeing) {
            console.log('ха-ха-ха-ха-ха-ха :)');
            cb(null, 'Переходио до наступної задачі');
        } else {
            cb(':(');
        }
    }, 3000);
}

function goSleep(isSleeping, cb) {
    setTimeout(() => {
        if (isSleeping) {
            console.log('Хр-Хр-Хр-Хр');
            cb(null, 'Переходио до наступної задачі');
        } else {
            cb('ммм моя кохана йди сюди!');
        }
    }, 300);
}

// ___________________________________________________________
wakeUp(true, (err, data) => {
    if (!err) {
        console.warn(data);
    } else {
        console.error(err);
    }
})

goWithDog(true, (err, data) => {
    if (!err) {
        console.warn(data);
    } else {
        console.error(err);
    }
})

cookBreakfast(true, (err, data) => {
    if (!err) {
        console.warn(data);
    } else {
        console.error(err);
    }
})

work(true, (err, data) => {
    if (!err) {
        console.warn(data);
    } else {
        console.error(err);
    }
})

learnPrograming(true, (err, data) => {
    if (!err) {
        console.warn(data);
    } else {
        console.error(err);
    }
})

goToTheATB(true, (err, data) => {
    if (!err) {
        console.warn(data);
    } else {
        console.error(err);
    }
})

sportExercises(true, (err, data) => {
    if (!err) {
        console.warn(data);
    } else {
        console.error(err);
    }
})
seeTheJokesOnYouTube(true, (err, data) => {
    if (!err) {
        console.warn(data);
    } else {
        console.error(err);
    }
})
goSleep(true, (err, data) => {
    if (!err) {
        console.warn(data);
    } else {
        console.error(err);
    }
})


wakeUp(true, (err, data) => {
    if (!err) {
        console.warn(data)
        goWithDog(true, (err, data) => {
            if (!err) {
                console.warn(data);
                cookBreakfast(true, (err, data) => {
                    if (!err) {
                        console.warn(data);
                        work(true, (err, data) => {
                            if (!err) {
                                console.warn(data);
                                learnPrograming(true, (err, data) => {
                                    if (!err) {
                                        console.warn(data);
                                        goToTheATB(true, (err, data) => {
                                            if (!err) {
                                                console.warn(data);
                                                sportExercises(true, (err, data) => {
                                                    if (!err) {
                                                        console.warn(data);
                                                        seeTheJokesOnYouTube(true, (err, data) => {
                                                            if (!err) {
                                                                console.warn(data);
                                                                goSleep(true, (err, data) => {
                                                                    if (!err) {
                                                                        console.warn(data);
                                                                    } else {
                                                                        console.error(err);
                                                                    }
                                                                })
                                                            } else {
                                                                console.error(err);
                                                            }
                                                        })
                                                    } else {
                                                        console.error(err);
                                                    }
                                                })
                                            } else {
                                                console.error(err);
                                            }
                                        })
                                    } else {
                                        console.error(err);
                                    }
                                })
                            } else {
                                console.error(err);
                            }
                        })
                    } else {
                        console.error(err);
                    }
                })
            } else {
                console.error(err);
            }
        })
    } else {
        console.error(err);
    }
})

function wakeUp(isWakedUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWakedUp) {
                console.log('Доброго ранку Світ, я прокинувся');
                resolve('Переходио до наступної задачі');
            } else {
                reject('Я ще не прокинувся!');
            }
        }, 1000);
    })
}

function goWithDog(isGoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isGoing) {
                console.log('Йдемо гуляти. Гав-Гав!');
                resolve('Переходио до наступної задачі');
            } else {
                reject('Собака ще спить');
            }
        }, 500);
    })
}

function cookBreakfast(isCooking) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isCooking) {
                console.log('Сніданок готовий!');
                resolve('Переходио до наступної задачі');
            } else {
                reject('Сьогодні без сніданку :(');
            }
        }, 600);
    })
}

function work(isWorking) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorking) {
                console.log('Money money money!');
                resolve('Переходио до наступної задачі');
            } else {
                reject('Сьогодні не працюємо!');
            }
        }, 300);
    })
}

function learnPrograming(isLearning) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLearning) {
                console.log('Буду як Нео: зламаю Матрицю, і звільню Зіон!');
                resolve('Переходио до наступної задачі');
            } else {
                reject('Щось сьогодні не вчиться :(');
            }
        }, 540);
    })
}

function goToTheATB(isGoing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isGoing) {
                console.log('В нас є 6 пачок туалетного паперу!. Сри скільки хочеш :) ');
                resolve('Переходио до наступної задачі');
            } else {
                reject('Сьогдні знов не буду срати :(');
            }
        }, 500);
    })
}

function sportExercises(isSporting) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSporting) {
                console.log('Буду як Арні!');
                resolve('Переходио до наступної задачі');
            } else {
                reject('Сьогдні відпочиваю :)');
            }
        }, 1000);
    })
}


function seeTheJokesOnYouTube(isSeeing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSeeing) {
                console.log('ха-ха-ха-ха-ха-ха :)');
                resolve('Переходио до наступної задачі');
            } else {
                reject(':(');
            }
        }, 3000);
    })
}

function goSleep(isSleeping) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSleeping) {
                console.log('Хр-Хр-Хр-Хр');
                resolve('Переходио до наступної задачі');
            } else {
                reject('ммм моя кохана йди сюди!');
            }
        }, 300);
    })
}


wakeUp(true)
    .then(value => {
        console.log(value);
        return goWithDog(true);
    })
    .then(value => {
        console.log(value);
        return cookBreakfast(true);
    })
    .then(value => {
        console.log(value);
        return work(true);
    })
    .then(value => {
        console.log(value);
        return learnPrograming(true);
    })
    .then(value => {
        console.log(value);
        return goToTheATB(true);
    })
    .then(value => {
        console.log(value);
        return sportExercises(true);
    })
    .then(value => {
        console.log(value);
        return seeTheJokesOnYouTube(true);
    })
    .then(value => {
        console.log(value);
        return goSleep(true);
    })
    .catch(err => {
        console.warn(err);
    })
    .finally(() => {
        console.log('День кінчився, спи!')
    })


async function startMyDay() {
    try {
        let result1 = await wakeUp(true);
        console.log(result1);

        let result2 = await goWithDog(true);
        console.log(result2);

        let result3 = await cookBreakfast(true);
        console.log(result3);

        let result4 = await work(true);
        console.log(result4);

        let result5 = await learnPrograming(true);
        console.log(result5);

        let result6 = await goToTheATB(false);
        console.log(result6);

        let result7 = await sportExercises(true);
        console.log(result7);

        let result8 = await seeTheJokesOnYouTube(true);
        console.log(result8);

        let result9 = await goSleep(true);
        console.log(result9);

    } catch (err) {
        console.warn(err);
    }
}

startMyDay();






