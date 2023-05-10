import clipboard from "clipboardy";
function format(text) {
  let getFunctionName = text
    .replace("LOCAL", "")
    .slice(0, text.indexOf("("))
    .replace(/  +/g, " ")
    .replace(/\n/g, "");
  let removedP = removeParenthesis(text)
    .replace(/\n/g, "")
    .replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, "")
    .replace(/  +/g, " ");

  console.log(`Result: ${getFunctionName} (${removedP})`);
  let result = `${getFunctionName} (${removedP})`;
  console.log(result);
  clipboard.writeSync(result.replace(/  +/g, " "));
}

format(`STATUS netifSiocGIfconf
(
NETNS *         ns, /**< network name space */
struct ifconf * ifc /**< network interface configuration array */
)
`);

function removeParenthesis(text) {
  return text.substring(text.indexOf("(") + 1, text.lastIndexOf(")"));
}
