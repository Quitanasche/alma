function deleteNestedProperty(obj, path) {
  // Ensure the object and path are provided
  if (!obj || !path || path.length === 0) {
    return;
  }

  // Traverse through the path to find the nested property
  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    current = current[path[i]];
    if (current === undefined) {
      return; // Exit if any part of the path is undefined
    }
  }

  // Delete the property if it exists at the end of the path
  delete current[path[path.length - 1]];
}

// Example usage:
// Assuming mergedLegend.explicit is your object
let mergedLegend = {
  explicit: {
    encode: {
      gradient: {
        // Properties you want to delete
      }
    }
  }
};

// Call the function to delete the nested property
deleteNestedProperty(mergedLegend.explicit, ['encode', 'gradient']);

// Now mergedLegend.explicit.encode.gradient should be deleted if it existed
