import savor, {
    Context, 
    Completion
  } from 'savor'

  savor.
  
  add('starting up once', (context: Context, done: Completion) => {
    done()
  }).
  
  run('[Jayesse] start')
  