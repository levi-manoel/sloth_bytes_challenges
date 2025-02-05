export function test(fn, result, ...args) {
    const res = fn(...args) === result

    if (res) console.log('✅', fn.name, result, args)
    else console.log('❌', fn.name, result, args)

    return res
}
