// C# Test File for Code Folding Extension
// This file contains various method and class definitions to test the folding extension

using System;
using System.Collections.Generic;
using System.Linq;

namespace TestNamespace
{
    // Simple class with basic methods
    public class SimpleClass
    {
        // Single-line method with no parameters
        public void SimpleMethod() { }

        // Single-line method with parameters on one line
        public int Add(int a, int b) { return a + b; }

        // Method with multi-line parameters
        public string FormatUserInfo(
            string firstName,
            string lastName,
            int age,
            string email,
            string phoneNumber)
        {
            return $"{firstName} {lastName}, Age: {age}, Email: {email}, Phone: {phoneNumber}";
        }

        // Constructor with single-line parameters
        public SimpleClass(string name, int id) { }

        // Constructor with multi-line parameters
        public SimpleClass(
            string firstName,
            string lastName,
            DateTime dateOfBirth,
            string address,
            string city,
            string state,
            string zipCode)
        {
            // Constructor body
        }
    }

    // Property examples
    public class PropertyClass
    {
        public string Name { get; set; }

        public int Id { get; set; }

        public DateTime CreatedDate { get; set; }

        // Auto-property with initialization
        public List<string> Tags { get; set; } = new List<string>();
    }

    // Interface definition
    public interface IDataProcessor
    {
        void ProcessData(string data);
        
        string TransformData(
            string input,
            bool isCompressed,
            int compressionLevel,
            string encoding,
            bool validateInput);
        
        Task<bool> ValidateAsync(string path);
    }

    // Class implementing interface
    public class DataProcessor : IDataProcessor
    {
        public void ProcessData(string data)
        {
            Console.WriteLine($"Processing: {data}");
        }

        public string TransformData(
            string input,
            bool isCompressed,
            int compressionLevel,
            string encoding,
            bool validateInput)
        {
            if (validateInput && string.IsNullOrEmpty(input))
            {
                throw new ArgumentException("Input cannot be null or empty");
            }
            
            return input.ToUpper();
        }

        public async Task<bool> ValidateAsync(string path)
        {
            await Task.Delay(100);
            return System.IO.File.Exists(path);
        }
    }

    // Nested classes
    public class OuterClass
    {
        public string OuterProperty { get; set; }

        public void OuterMethod()
        {
            Console.WriteLine("Outer method");
        }

        public class InnerClass
        {
            public void InnerMethod()
            {
                Console.WriteLine("Inner method");
            }

            public string ComplexInnerMethod(
                int parameter1,
                string parameter2,
                bool parameter3,
                List<string> parameter4,
                Dictionary<string, object> parameter5,
                Action<string> callback)
            {
                return "Complex result";
            }
        }
    }

    // Generic class
    public class GenericRepository<T> where T : class
    {
        public T GetById(int id)
        {
            return null;
        }

        public IEnumerable<T> GetAll()
        {
            return new List<T>();
        }

        public void Add(
            T entity,
            bool validateBeforeAdd,
            Action<T> beforeAddCallback,
            Action<T> afterAddCallback)
        {
            // Add logic
        }

        public async Task<T> GetByIdAsync(
            int id,
            bool includeRelated,
            CancellationToken cancellationToken)
        {
            await Task.Delay(100, cancellationToken);
            return null;
        }
    }

    // Class with operators
    public class Vector
    {
        public double X { get; set; }
        public double Y { get; set; }

        public static Vector operator +(
            Vector v1,
            Vector v2)
        {
            return new Vector { X = v1.X + v2.X, Y = v1.Y + v2.Y };
        }

        public static Vector operator -(Vector v1, Vector v2)
        {
            return new Vector { X = v1.X - v2.X, Y = v1.Y - v2.Y };
        }
    }

    // Class with lambda and delegate methods
    public class FunctionalClass
    {
        public Action<string> ProcessAction => (text) => Console.WriteLine(text);

        public Func<int, int, int> Add => (a, b) => a + b;

        public void ApplyTransformation(
            List<int> numbers,
            Func<int, int> transform,
            Action<int> onResult,
            Predicate<int> filter)
        {
            foreach (var num in numbers.Where(n => filter(n)))
            {
                onResult(transform(num));
            }
        }
    }

    // Static class
    public static class UtilityClass
    {
        public static string Concatenate(string a, string b)
        {
            return a + b;
        }

        public static T CreateInstance<T>(
            string typeName,
            params object[] arguments) where T : class
        {
            return null;
        }
    }

    // Abstract class
    public abstract class AbstractBase
    {
        public abstract void DoSomething();

        public abstract string ProcessData(
            string input,
            bool includeMetadata,
            Dictionary<string, string> options,
            CancellationToken token);

        public virtual void VirtualMethod()
        {
            Console.WriteLine("Virtual method");
        }
    }

    // Sealed class
    public sealed class SealedClass : AbstractBase
    {
        public override void DoSomething()
        {
            Console.WriteLine("Sealed implementation");
        }

        public override string ProcessData(
            string input,
            bool includeMetadata,
            Dictionary<string, string> options,
            CancellationToken token)
        {
            return input;
        }
    }
}
