const alarm = process.argv.slice(2)

const timer = function(input) {
  for (const el of input) {
    if (el > 0 || typeof el === 'number') {
      setTimeout(() => {
        process.stdout.write('ALARM\n')
      }, el * 1000)
    }
  }
}

timer(alarm)
