// C/C++ Test File for Code Folding Extension
// This file contains various function and class definitions to test the folding extension

#include <iostream>
#include <string>/Users/ksooi/Repo/RightClickCodeFolding/test/TestFile.cpp
#include <vector>
#include <map>
#include <memory>

using namespace std;

// Simple C-style function
void simpleFunction() {
    cout << "Simple function" << endl;
}

// Single-line function with parameters
int add(int a, int b) { return a + b; }

// Function with multi-line parameters
string formatUserInfo(
    const string& firstName,
    const string& lastName,
    int age,
    const string& email,
    const string& phoneNumber)
{
    return firstName + " " + lastName + ", Age: " + to_string(age) +
           ", Email: " + email + ", Phone: " + phoneNumber;
}

// Function with many parameters spanning multiple lines
double calculateComplexValue(
    double value1,
    double value2,
    double value3,
    double value4,
    double value5,
    double value6,
    bool normalize,
    int precision)
{
    return (value1 + value2 + value3 + value4 + value5 + value6) / 6.0;
}

// Simple C++ class
class SimpleClass
{
public:
    // Constructor with single-line parameters
    SimpleClass(const string& name, int id) { }

    // Constructor with multi-line parameters
    SimpleClass(
        const string& firstName,
        const string& lastName,
        int age,
        const string& email,
        const string& address)
    {
        // Constructor body
    }

    // Destructor
    ~SimpleClass() { }

    // Single-line method
    void printMessage() { cout << "Hello" << endl; }

    // Method with parameters on one line
    int multiply(int a, int b) { return a * b; }

    // Method with multi-line parameters
    string concatenateStrings(
        const string& str1,
        const string& str2,
        const string& str3,
        const string& separator,
        bool trim)
    {
        return str1 + separator + str2 + separator + str3;
    }

    // Virtual method
    virtual void processData(const string& data) { }

    // Const method
    string getData() const { return data_; }

    // Static method
    static int getInstanceCount() { return instanceCount_; }

private:
    string data_;
    static int instanceCount_;
};

// Class with properties and operators
class Vector
{
public:
    double x;
    double y;

    Vector(double x = 0, double y = 0) : x(x), y(y) { }

    // Operator overload with multi-line
    Vector operator+(
        const Vector& other) const
    {
        return Vector(this->x + other.x, this->y + other.y);
    }

    // Operator overload single-line
    Vector operator-(const Vector& other) const { return Vector(x - other.x, y - other.y); }

    // Method with reference parameters
    void addToThis(
        const Vector& v1,
        const Vector& v2,
        const Vector& v3,
        double scaleFactor)
    {
        x += (v1.x + v2.x + v3.x) * scaleFactor;
        y += (v1.y + v2.y + v3.y) * scaleFactor;
    }
};

// Struct with methods
struct DataPoint
{
    int id;
    string name;
    double value;

    // Method in struct
    void display() {
        cout << "ID: " << id << ", Name: " << name << ", Value: " << value << endl;
    }

    // Constructor
    DataPoint(
        int id,
        const string& name,
        double value) : id(id), name(name), value(value) { }

    // Method with complex parameters
    bool validate(
        const string& requiredPrefix,
        double minValue,
        double maxValue,
        bool strict,
        const vector<string>& allowedNames)
    {
        return value >= minValue && value <= maxValue;
    }
};

// Template class
template<typename T>
class GenericContainer
{
public:
    void add(const T& item) {
        items_.push_back(item);
    }

    T get(size_t index) {
        return items_[index];
    }

    void process(
        const T& initial,
        bool includeFirst,
        function<T(T)> transformer,
        function<void(T)> callback)
    {
        for (const auto& item : items_) {
            callback(transformer(item));
        }
    }

private:
    vector<T> items_;
};

// Nested class/struct
class OuterClass
{
public:
    void outerMethod() {
        cout << "Outer method" << endl;
    }

    // Nested class
    class InnerClass
    {
    public:
        void innerMethod() {
            cout << "Inner method" << endl;
        }

        string complexInnerMethod(
            int param1,
            const string& param2,
            bool param3,
            const vector<string>& param4,
            const map<string, int>& param5)
        {
            return "Complex result";
        }
    };
};

// Abstract base class
class AbstractProcessor
{
public:
    virtual ~AbstractProcessor() { }

    virtual void processInput(const string& input) = 0;

    virtual string transformData(
        const string& data,
        bool compress,
        int level,
        const string& encoding,
        bool validate) = 0;

    virtual bool validate(const string& path) {
        return true;
    }
};

// Derived class
class ConcreteProcessor : public AbstractProcessor
{
public:
    void processInput(const string& input) override {
        cout << "Processing: " << input << endl;
    }

    string transformData(
        const string& data,
        bool compress,
        int level,
        const string& encoding,
        bool validate) override
    {
        return data;
    }
};

// Class with multiple inheritance
class Drawable
{
public:
    virtual void draw() = 0;
    virtual ~Drawable() { }
};

class Printable
{
public:
    virtual void print() = 0;
    virtual ~Printable() { }
};

class Document : public Drawable, public Printable
{
public:
    void draw() override {
        cout << "Drawing document" << endl;
    }

    void print() override {
        cout << "Printing document" << endl;
    }

    void saveToFile(
        const string& filename,
        bool compress,
        bool validate,
        const string& format,
        int version)
    {
        cout << "Saving to " << filename << endl;
    }
};

// Helper function with function pointers
void executeCallback(
    function<void(int)> callback,
    function<int(int)> preprocessor,
    const vector<int>& values)
{
    for (int val : values) {
        callback(preprocessor(val));
    }
}

// Lambda usage in class
class FunctionalProcessor
{
public:
    void processWithLambda(
        const vector<int>& data,
        function<int(int)> transform,
        function<void(int)> onResult)
    {
        for (int item : data) {
            onResult(transform(item));
        }
    }
};
