try {
  var presets = require('./build/presets.json')
} catch (err) {
  console.log('Failed! No build found. Try running: \n\n npm run build\n')
}
var fs = require('fs')

console.log('Creating English messages from ./build/presets.json...')
var messages = {}

var fields = presets.fields
Object.keys(fields).map((id) => {
  var field = fields[id]

  messages[`forest-settings.fields.${id}.label`] = {
    description: `Label displayed to user to give context for ${field.label}`,
    message: field.label
  }

  messages[`forest-settings.fields.${id}.placeholder`] = {
    description: `An example to guide the user for ${field.label}`,
    message: field.placeholder
  }

  if (field.type === 'select_one' || field.type === 'select_multiple') {
    field.options.map((option) => {
      messages[`forest-settings.fields.${id}.options.${option}`] = {
        description: `An option for ${field.label}`,
        message: option
      }
    })
  }
})

Object.keys(presets.presets).map((id) => {
  var preset = presets.presets[id]
  messages[`forest-settings.presets.${id}`] = {
    description: `The name of preset ${id}`,
    message: preset.name
  }
})

fs.writeFileSync('messages/en.json', JSON.stringify(messages, null, 2))
console.log('Done! See messages/en.json')
