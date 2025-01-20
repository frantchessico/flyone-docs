import type { Metadata } from "next"
import { CodeBlock } from "./components/code-block"
import { TableOfContents } from "./components/table-of-contents"
import { Footer } from "./components/footer"

export const metadata: Metadata = {
  title: "Flyone Library Documentation",
  description: "Documentation for the Flyone TypeScript library for link management",
}

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Flyone Library</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <TableOfContents />
        </aside>
        <main className="md:w-3/4">
          <section id="introduction" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              Flyone is a TypeScript-based library for interacting with the Flyone API, providing seamless integration
              and functionality for link management.
            </p>
          </section>

          <section id="features" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside">
              <li>Create links</li>
              <li>Update existing links</li>
              <li>Delete links</li>
              <li>Fetch all links or specific links by ID</li>
              <li>Track clicks over time</li>
              <li>Manage device-specific and country-specific targeting</li>
            </ul>
          </section>

          <section id="installation" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Installation</h2>
            <p className="mb-4">Install the library via npm or yarn:</p>
            <CodeBlock language="bash" code="npm install flyone" />
            <p className="my-4">or</p>
            <CodeBlock language="bash" code="yarn add flyone" />
          </section>

          <section id="usage" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Usage</h2>

            <h3 className="text-xl font-semibold mb-2">Importing the Library</h3>
            <CodeBlock language="typescript" code={`import { Flyone } from "flyone";`} />

            <h3 className="text-xl font-semibold mt-4 mb-2">Initializing the Flyone Instance</h3>
            <CodeBlock
              language="typescript"
              code={`
const flyone = new Flyone({
  apiKey: "SavanaPoint Your-API-Key-Here",
  orgId: "Your-Organization-Id-Here",
});`}
            />

            <h3 className="text-xl font-semibold mt-4 mb-2">Examples</h3>

            <h4 className="text-lg font-semibold mt-4 mb-2">Create a Short Link</h4>
            <CodeBlock
              language="typescript"
              code={`
const newLink = await flyone.createShortLink({
  originalUrl: "https://example.com",
  title: "My Example Link",
});
console.log("Created Link:", newLink);`}
            />

            <h4 className="text-lg font-semibold mt-4 mb-2">Fetch All Links</h4>
            <CodeBlock
              language="typescript"
              code={`
const links = await flyone.getAllLinks();
console.log("All Links:", links);`}
            />

            <h4 className="text-lg font-semibold mt-4 mb-2">Get a Link by ID</h4>
            <CodeBlock
              language="typescript"
              code={`
const link = await flyone.getLinkById("link-id-here");
console.log("Link Details:", link);`}
            />

            <h4 className="text-lg font-semibold mt-4 mb-2">Update a Short Link</h4>
            <CodeBlock
              language="typescript"
              code={`
const updatedLink = await flyone.updateShortLink("link-id-here", {
  title: "Updated Title",
});
console.log("Updated Link:", updatedLink);`}
            />

            <h4 className="text-lg font-semibold mt-4 mb-2">Delete a Short Link</h4>
            <CodeBlock
              language="typescript"
              code={`
await flyone.deleteShortLink("link-id-here");
console.log("Link deleted successfully.");`}
            />

            <h4 className="text-lg font-semibold mt-4 mb-2">Track Clicks Over Time</h4>
            <CodeBlock
              language="typescript"
              code={`
const clicks = await flyone.getClicksOverTime("link-id-here");
console.log("Clicks Over Time:", clicks);`}
            />

            <h4 className="text-lg font-semibold mt-4 mb-2">Remove a Device Target</h4>
            <CodeBlock
              language="typescript"
              code={`
await flyone.removeDevice("link-id-here", "device-id-here");
console.log("Device removed successfully.");`}
            />

            <h4 className="text-lg font-semibold mt-4 mb-2">Remove a Country Target</h4>
            <CodeBlock
              language="typescript"
              code={`
await flyone.removeCountry("link-id-here", "country-id-here");
console.log("Country removed successfully.");`}
            />
          </section>

          <section id="error-handling" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
            <p className="mb-4">
              Errors are handled using a centralized mechanism. In case of an error, the library will throw an exception
              with a descriptive message. Below are the possible error messages and their corresponding HTTP status
              codes:
            </p>
            <table className="w-full mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Status Code</th>
                  <th className="p-2 text-left">Message</th>
                  <th className="p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">400</td>
                  <td className="p-2">Invalid request parameters</td>
                  <td className="p-2">The request payload is invalid.</td>
                </tr>
                <tr>
                  <td className="p-2">401</td>
                  <td className="p-2">Unauthorized</td>
                  <td className="p-2">The API key or organization ID is missing/invalid.</td>
                </tr>
                <tr>
                  <td className="p-2">403</td>
                  <td className="p-2">Forbidden</td>
                  <td className="p-2">You do not have permission to perform this action.</td>
                </tr>
                <tr>
                  <td className="p-2">404</td>
                  <td className="p-2">Resource not found</td>
                  <td className="p-2">The requested resource does not exist.</td>
                </tr>
                <tr>
                  <td className="p-2">500</td>
                  <td className="p-2">Internal server error</td>
                  <td className="p-2">An unexpected error occurred on the server.</td>
                </tr>
                <tr>
                  <td className="p-2">503</td>
                  <td className="p-2">Service unavailable</td>
                  <td className="p-2">The service is temporarily unavailable.</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold mt-4 mb-2">Example Error Handling</h3>
            <CodeBlock
              language="typescript"
              code={`
try {
  await flyone.createShortLink({
    originalUrl: "https://example.com",
    title: "My Example Link",
  });
} catch (error) {
  console.error("Error creating link:", error.message);
}`}
            />
          </section>

          <section id="configuration" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Configuration Options</h2>
            <h3 className="text-xl font-semibold mb-2">FlyoneConfig</h3>
            <table className="w-full mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Property</th>
                  <th className="p-2 text-left">Type</th>
                  <th className="p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">
                    <code>apiKey</code>
                  </td>
                  <td className="p-2">string</td>
                  <td className="p-2">Your API key for authentication.</td>
                </tr>
                <tr>
                  <td className="p-2">
                    <code>orgId</code>
                  </td>
                  <td className="p-2">string</td>
                  <td className="p-2">The ID of your organization.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="contributing" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contributing</h2>
            <p className="mb-4">Contributions are welcome! Please follow the guidelines below:</p>
            <ol className="list-decimal list-inside">
              <li>Fork the repository.</li>
              <li>Create a new branch for your feature/fix.</li>
              <li>Commit your changes with clear commit messages.</li>
              <li>Submit a pull request.</li>
            </ol>
          </section>

          <section id="license" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">License</h2>
            <p>This library is licensed under the MIT License. See the LICENSE file for details.</p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

